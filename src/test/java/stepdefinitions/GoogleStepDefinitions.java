package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.Keys;
import org.testng.Assert;
import pages.GooglePage;
import utilities.ConfigReader;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class GoogleStepDefinitions {
    GooglePage googlePage=new GooglePage();
    @Given("I’m on the homepage")
    public void i_m_on_the_homepage() {
       Driver.getDriver().get(ConfigReader.getProperty("google_url"));
    }

    @When("I type {string} into the search field")
    public void i_type_into_the_search_field(String string) {
        googlePage.googleSearchBox.sendKeys(string);
    }

    @When("I click the Google Search button")
    public void i_click_the_Google_Search_button() {
        googlePage.googleSearchBox.submit();
    }

    @Then("I go to the search results page")
    public void i_go_to_the_search_results_page() {
        String googleTitle=Driver.getDriver().getTitle();
        String expectedResult="Buscar con Google";
        Assert.assertTrue(googleTitle.contains(expectedResult));
        Driver.getDriver().manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }

    @Then("the first result is {string}")
    public void the_first_result_is(String string) {
        String actualFirstResult=googlePage.firstResultOfMovie.getText();
        Assert.assertTrue(actualFirstResult.contains(string));
        Driver.getDriver().manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }

    @When("I click on the first result link of result")
    public void i_click_on_the_first_result_link_of_result() {
       googlePage.firstResultOfMovie.click();
    }

    @Then("I go to the {string} page")
    public void i_go_to_the_page(String string) {
        String title=Driver.getDriver().getTitle();
        Assert.assertTrue(title.contains(string));
    }

    @When("I type {string} into the search field now")
    public void i_type_into_the_search_field_now(String string) {
        Driver.getDriver().get(ConfigReader.getProperty("google_url"));
        googlePage.googleSearchBox.sendKeys(string);
    }

    @When("the suggestions list is displayed")
    public void the_suggestions_list_is_displayed() {
        Driver.getDriver().manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

    }

    @When("I click on the first suggestion in the list")
    public void i_click_on_the_first_suggestion_in_the_list() {
       googlePage.firstSuggestion.click();
    }

    @Then("the first result must be {string}")
    public void the_first_result_must_be(String string) {
  String actualFirstResult=googlePage.firstResultOfW.getText();
  Assert.assertTrue(actualFirstResult.contains(string));
        Driver.getDriver().manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

    }

    @When("I click on the first result link")
    public void i_click_on_the_first_result_link() {
        googlePage.firstResultOfW.click();

    }

    @Then("I go to the {string} page now")
    public void i_go_to_the_page_now(String string) {
        String actualTitle=Driver.getDriver().getTitle();
        Assert.assertTrue(actualTitle.contains(string));
    }

}
