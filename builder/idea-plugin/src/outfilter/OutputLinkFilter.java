package outfilter;

import com.intellij.execution.filters.Filter;
import com.intellij.execution.filters.OpenFileHyperlinkInfo;
import com.intellij.openapi.editor.markup.TextAttributes;
import com.intellij.openapi.fileEditor.OpenFileDescriptor;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.roots.ProjectRootManager;
import com.intellij.openapi.vfs.LocalFileSystem;
import com.intellij.openapi.vfs.VirtualFile;

import java.io.File;
import java.util.Arrays;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

// based on: https://github.com/minchenkov/output-link-filter
public class OutputLinkFilter
        implements Filter {

    public static final Pattern FILE_PATTERN = Pattern.compile(
            "(.+):(\\d+):(\\d+):"
    );

    private final Project project;

    public OutputLinkFilter(Project project) {
        this.project = project;
    }

    @Override
    public Result applyFilter(String s, int endPoint) {
//        System.out.println("<<<");
//        System.out.println(s);
//        System.out.println(">>>");

        int startPoint = endPoint - s.length();
        Matcher matcher = FILE_PATTERN.matcher(s);

        if (matcher.find()) {
            String filePathString = matcher.group(1);

//            String filePath = filePathString.replaceAll("\\\\", "/");
//            Optional<VirtualFile> fileOpt = Arrays.stream(
//                    ProjectRootManager
//                            .getInstance(project)
//                            .getContentRootsFromAllModules()
//            )
//                    .map(v -> v.findFileByRelativePath(filePath))
//                    .filter(f -> f != null)
//                    .findFirst();

            Optional<VirtualFile> fileOpt = Optional.ofNullable(LocalFileSystem.getInstance().findFileByIoFile(new File(filePathString)));

            if (fileOpt.isPresent()) {

                OpenFileDescriptor fileDescriptor = new OpenFileDescriptor(project,
                        fileOpt.get(),
                        Integer.parseInt(matcher.group(2)) - 1, // line
                        Integer.parseInt(matcher.group(3)) - 1 // column
                );

                return new Result(startPoint + matcher.start(),
                        startPoint + matcher.end(), new OpenFileHyperlinkInfo(fileDescriptor));
            }
        }

        return new Result(startPoint, endPoint, null, new TextAttributes());
    }
}