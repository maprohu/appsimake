package bootjava;

import java.io.*;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

public class BootJava {

    public static final String KOTLIN_VERSION = "1.3.30";
    public static final String KOTLIN_FILE_BASE_NAME = "kotlin-compiler-"+KOTLIN_VERSION;
    public static final String KOTLIN_ZIP_FILE_NAME = KOTLIN_FILE_BASE_NAME+".zip";
    public static final String KOTLIN_URL = "https://github.com/JetBrains/kotlin/releases/download/v"+KOTLIN_VERSION+"/"+KOTLIN_ZIP_FILE_NAME;
    public static final String LOCAL_DIR = "local";
    public static final String DOWNLOADS_DIR = LOCAL_DIR + "/downloads";
    public static final String LIB_DIR = LOCAL_DIR + "/lib";
    public static final String KOTLIN_EXTRACTED_PATH = LIB_DIR + "/" + KOTLIN_FILE_BASE_NAME;
    public static final String KOTLIN_LIB_DIR = KOTLIN_EXTRACTED_PATH + "/kotlinc/lib";


    public static final String IDEA_DIR = ".idea";
    public static final String IDEA_KOTLIN_LIBRARY_XML = IDEA_DIR + "/libraries/KotlinJavaRuntime.xml";
    public static final String IDEA_KOTLIN_COMPILER_LIBRARY_XML = IDEA_DIR + "/libraries/kotlin_compiler.xml";

    public static void main(String[] args) throws IOException, URISyntaxException {
        File targetFile = new File(DOWNLOADS_DIR, KOTLIN_ZIP_FILE_NAME);
        if (!targetFile.exists()) {
            System.out.println("Starting download...");
            URL url = new URL(KOTLIN_URL);
            targetFile.getParentFile().mkdirs();
            try (InputStream sourceStream = url.openStream()) {
                try (FileOutputStream targetStream = new FileOutputStream(targetFile)) {
                    ReadableByteChannel readableByteChannel = Channels.newChannel(sourceStream);
                    targetStream.getChannel().transferFrom(readableByteChannel, 0, Long.MAX_VALUE);
                }
            }
        } else {
            System.out.println("Using already downloaded file: " + targetFile);
        }

        File extractDir = new File(
                KOTLIN_EXTRACTED_PATH
        );

        if (!extractDir.exists()) {
            System.out.println("Extracting file: " + targetFile);

            unzip(
                    targetFile,
                    extractDir
            );
        } else {
            System.out.println("File already extracted: " + extractDir);
        }


        if (Paths.get(IDEA_DIR).toFile().exists()) {
            String xml = "<component name=\"libraryTable\">\n" +
                    "  <library name=\"KotlinJavaRuntime\">\n" +
                    "    <CLASSES>\n" +
                    "      <root url=\"jar://$PROJECT_DIR$/"+KOTLIN_LIB_DIR+"/kotlin-stdlib.jar!/\" />\n" +
                    "      <root url=\"jar://$PROJECT_DIR$/"+KOTLIN_LIB_DIR+"/kotlin-reflect.jar!/\" />\n" +
                    "      <root url=\"jar://$PROJECT_DIR$/"+KOTLIN_LIB_DIR+"/kotlin-test.jar!/\" />\n" +
                    "      <root url=\"jar://$PROJECT_DIR$/"+KOTLIN_LIB_DIR+"/kotlin-stdlib-jdk7.jar!/\" />\n" +
                    "      <root url=\"jar://$PROJECT_DIR$/"+KOTLIN_LIB_DIR+"/kotlin-stdlib-jdk8.jar!/\" />\n" +
                    "    </CLASSES>\n" +
                    "    <JAVADOC />\n" +
                    "    <SOURCES>\n" +
                    "      <root url=\"jar://$PROJECT_DIR$/"+KOTLIN_LIB_DIR+"/kotlin-stdlib-sources.jar!/\" />\n" +
                    "      <root url=\"jar://$PROJECT_DIR$/"+KOTLIN_LIB_DIR+"/kotlin-reflect-sources.jar!/\" />\n" +
                    "      <root url=\"jar://$PROJECT_DIR$/"+KOTLIN_LIB_DIR+"/kotlin-test-sources.jar!/\" />\n" +
                    "      <root url=\"jar://$PROJECT_DIR$/"+KOTLIN_LIB_DIR+"/kotlin-stdlib-jdk7-sources.jar!/\" />\n" +
                    "      <root url=\"jar://$PROJECT_DIR$/"+KOTLIN_LIB_DIR+"/kotlin-stdlib-jdk8-sources.jar!/\" />\n" +
                    "    </SOURCES>\n" +
                    "  </library>\n" +
                    "</component>";

            Files.write(Paths.get(IDEA_KOTLIN_LIBRARY_XML), xml.getBytes());

            String compXml = "<component name=\"libraryTable\">\n" +
                    "  <library name=\"kotlin-compiler\">\n" +
                    "    <CLASSES>\n" +
                    "      <root url=\"jar://$PROJECT_DIR$/"+KOTLIN_LIB_DIR+"/kotlin-compiler.jar!/\" />\n" +
                    "      <root url=\"jar://$PROJECT_DIR$/"+KOTLIN_LIB_DIR+"/kotlinx-serialization-compiler-plugin.jar!/\" />\n" +
                    "    </CLASSES>\n" +
                    "    <JAVADOC />\n" +
                    "    <SOURCES>\n" +
                    "      <root url=\"jar://$PROJECT_DIR$/local/downloads/kotlin-"+KOTLIN_VERSION+".zip!/kotlin-"+KOTLIN_VERSION+"/compiler/incremental-compilation-impl/src\" />\n" +
                    "      <root url=\"jar://$PROJECT_DIR$/local/downloads/kotlin-"+KOTLIN_VERSION+".zip!/kotlin-"+KOTLIN_VERSION+"/compiler/cli/cli-common/src\" />\n" +
                    "    </SOURCES>\n" +
                    "  </library>\n" +
                    "</component>";

            Files.write(Paths.get(IDEA_KOTLIN_COMPILER_LIBRARY_XML), compXml.getBytes());


        }

    }

    // https://www.javadevjournal.com/java/zipping-and-unzipping-in-java/
    public static void unzip(final File zipFilePath, final File unzipLocation) throws IOException {

        unzipLocation.mkdirs();

        try (ZipInputStream zipInputStream = new ZipInputStream(new FileInputStream(zipFilePath))) {
            ZipEntry entry = zipInputStream.getNextEntry();
            while (entry != null) {
                Path filePath = unzipLocation.toPath().resolve(entry.getName());
                if (!entry.isDirectory()) {
                    unzipFiles(zipInputStream, filePath);
                } else {
                    Files.createDirectories(filePath);
                }

                zipInputStream.closeEntry();
                entry = zipInputStream.getNextEntry();
            }
        }
    }

    public static void unzipFiles(final ZipInputStream zipInputStream, final Path unzipFilePath) throws IOException {

        try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(unzipFilePath.toAbsolutePath().toString()))) {
            byte[] bytesIn = new byte[1024];
            int read = 0;
            while ((read = zipInputStream.read(bytesIn)) != -1) {
                bos.write(bytesIn, 0, read);
            }
        }

    }

}
