package StepDefenition;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class apistepdefn {
WebDriver driver;

@Given("^User should launch swapi.dev$")
public void LaunchURL() {
driver = new FirefoxDriver();
driver.manage().window().maximize();
driver.get("https://swapi.dev/");
}

@When("^enter valid service URL for all characters$")
public void validDataforAllCharacters() {
driver.findElement(By.id("interactive")).sendKeys("people/");
}

@Then("^click on the request button$")
public void clickRequestforAllCharacters() {
driver.findElement(By.xpath("//button[@class = 'btn btn-primary']")).click();
}

@Then("^check final result$")
public void validateOutput() {
boolean allcharvalidresult = driver.findElement(By.id("interactive_output")).isDisplayed();
Assert.assertTrue(allcharvalidresult);
}

@Given("^User must open swapi.dev$")
public void useMustOpenSwapi() {
driver = new FirefoxDriver();
driver.manage().window().maximize();
driver.get("https://swapi.dev/");
}

@When("^enter all starwars characters invalid data$")
public void AllCharWithInvalidData() {
driver.findElement(By.id("interactive")).sendKeys("people180/");

}

@Then("^click request button$")
public void clickRequestforAllCharInvalidData() {
driver.findElement(By.xpath("//button[@class = 'btn btn-primary']")).click();
}

@Then("^check displayed result$")
public void checkAllCharInvalidDataResult() {
boolean allcharinvaliddataresult = driver.findElement(By.id("interactive_output")).isDisplayed();
Assert.assertTrue(allcharinvaliddataresult);
}


@Given("^User must be on swapi$")
public void userOnSwapi() {

driver = new FirefoxDriver();
driver.manage().window().maximize();
driver.get("https://swapi.dev/");
}

@When("^enter valid service URL for starwars specific character$")
public void validServiceURLofSpecificCharacter() {
driver.findElement(By.id("interactive")).sendKeys("people/4/");
}

@Then("^click on request box$")
public void click_on_Request_button() {
driver.findElement(By.xpath("//button[@class = 'btn btn-primary']")).click();
}

@Then("^confirm the result$")
public void checkFinalResult() {
boolean specificCharacterValidResult = driver.findElement(By.id("interactive_output")).isDisplayed();
Assert.assertTrue(specificCharacterValidResult);

}

@Given("^User should launch the website$")
public void userLaunchSwapi() {
driver = new FirefoxDriver();
driver.manage().window().maximize();
driver.get("https://swapi.dev/");
}

@When("^enter invalid service URL for specific character$")
public void invalidServiceURLforSpecificCharacter() {
driver.findElement(By.id("interactive")).sendKeys("people/202/");

}

@Then("^do click on the request button$")
public void requestButtonforInvalidSpecificCharacterURL() {
driver.findElement(By.xpath("//button[@class = 'btn btn-primary']")).click();
}

@Then("^confirm if the end result displayed$")
public void resultofInvalidserviceURLforspecificChar() {
boolean resultofInvalidserviceURL = driver.findElement(By.id("interactive_output")).isDisplayed();
Assert.assertTrue(resultofInvalidserviceURL);

}

@Given("^User should open firefox and type swapi URL$")
public void openSwapi() {
driver = new FirefoxDriver();
driver.manage().window().maximize();
driver.get("https://swapi.dev/");
}

@When("^enter valid planets/characters valid serviceURL$")
public void searchWithValidData() {
driver.findElement(By.id("interactive")).sendKeys("planets/4/");
}

@Then("^click the request btn$")
public void requestButtonforValidSearch() {
driver.findElement(By.xpath("//button[@class = 'btn btn-primary']")).click();
}

@Then("^check the outcome$")
public void resultofValidSearchData() {
boolean validSearchDataResult = driver.findElement(By.id("interactive_output")).isDisplayed();
Assert.assertTrue(validSearchDataResult);
}

@Given("^User must be on homepage of swapi.dev$")
public void userMustBeOnSwapiHomepage() {
driver = new FirefoxDriver();
driver.manage().window().maximize();
driver.get("https://swapi.dev/");
}

@When("^enter invalid service URL to search planets/characters$")
public void searchWithInvalidData() {
driver.findElement(By.id("interactive")).sendKeys("planets/202/");
}

@Then("^do click on request$")
public void requestButtonforSearchInvalidData() {
driver.findElement(By.xpath("//button[@class = 'btn btn-primary']")).click();
}

@Then("^check if the final result is available$")
public void resultofSearchWithInvalidData() {
boolean resultofInvalidSearch = driver.findElement(By.id("interactive_output")).isDisplayed();
Assert.assertTrue(resultofInvalidSearch);
}

@Given("^User should be on homepage of swapi.dev$")
public void userIsOnHomepageofSwapi() {
driver = new FirefoxDriver();
driver.manage().window().maximize();
driver.get("https://swapi.dev/");
}

@When("^keep service URL field blank$")
public void blankServiceURLField() {
driver.findElement(By.id("interactive")).sendKeys("");
}

@Then("^click on the request$")
public void clickRequestforBlankURL() {
driver.findElement(By.xpath("//button[@class = 'btn btn-primary']")).click();
}

@Then("^check if the result is displayed$")
public void blankServiceURLResult() {
boolean resultofblankserviceURL = driver.findElement(By.id("interactive_output")).isDisplayed();
Assert.assertTrue(resultofblankserviceURL);
}

@After
public void tearDown() {
driver.close();
}

}
