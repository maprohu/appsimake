OUTDIR=local/derived/out/production

BOOTJAVA_OUT=$OUTDIR/bootjava
mkdir -p $BOOTJAVA_OUT
find builder/bootjava/src -name "*.java" -print | xargs javac -d $BOOTJAVA_OUT

KOTLIN_VERSION=1.3.11
KOTLINC_BIN=local/lib/kotlin-compiler-$KOTLIN_VERSION/kotlinc/bin
KOTLINC=$KOTLINC_BIN/kotlinc
KOTLIN=$KOTLINC_BIN/kotlin
chmod a+x $KOTLINC
chmod a+x $KOTLIN

$KOTLINC builder/buildserver/src -d $OUTDIR/buildserver
$KOTLIN -classpath $OUTDIR/buildserver buildserver.BuildserverKt


