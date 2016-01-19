package example;


import com.google.template.soy.SoyFileSet;
import com.google.template.soy.jssrc.SoyJsSrcOptions;
import com.google.template.soy.shared.SoyGeneralOptions;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class Application {


    public static void main(String[] args) throws IOException {

        SoyFileSet.Builder builder = SoyFileSet.builder();
        final SoyGeneralOptions soyGeneralOptions = new SoyGeneralOptions();
        builder.setGeneralOptions(soyGeneralOptions);
        builder.setDeclaredSyntaxVersionName("1.0");
        builder.add(Application.class.getResource("/templates/sample.soy"));
        final SoyFileSet fileSet = builder.build();

        File output = new File(args[0]);
        SoyJsSrcOptions options = new SoyJsSrcOptions();
//        options.setIsUsingIjData(true);
//        options.setCodeStyle(SoyJsSrcOptions.CodeStyle.CONCAT);
        options.setShouldProvideRequireSoyNamespaces(true);
        options.shouldDeclareTopLevelNamespaces();
        options.setShouldProvideBothSoyNamespacesAndJsFunctions(true);
        final List<String> strings = fileSet.compileToJsSrc(options, null);

        FileWriter writer = new FileWriter(output);
        for (String string : strings) {
            writer.write(string);
        }
        writer.close();
    }
}
