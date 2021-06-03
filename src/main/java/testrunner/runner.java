package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
			features="C:\\Users\\prash\\eclipse-workspace\\StarwarsAPIProject\\src\\main\\java\\Feature\\StarwarSearch.feature"
			,glue= {"StepDefenition"}
		    ,plugin= {"pretty","html:test-output", "json:json-output/cucumber.json" , "junit:target/cucumber-reports/Cucumber.xml"}
			,monochrome=true,
			 dryRun=false
		)

public class runner {

}
