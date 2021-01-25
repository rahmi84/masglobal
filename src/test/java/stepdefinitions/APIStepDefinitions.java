package stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.testng.Assert;
import utilities.APIUtilities;
import static io.restassured.RestAssured.*;
public class APIStepDefinitions extends APIUtilities {

    @When("user goes to end point")
    public void user_goes_to_end_point() {
        callEndPoint();

    }

    @When("User creates a new id with the title of {string} and body as {string} and verify if the id is created")
    public void userCreatesANewIdWithTheTitleOfAndBodyAsAndVerifyIfTheIdIsCreated(String title, String body) {
       System.out.println("after creation");
        createNewUser(title,body);
    }

    @When("user changes information title of userId {int} id {int} as title {string} and body  as {string}")
    public void userChangesInformationTitleOfUserIdIdAsTitleAndBodyAs(int userId, int id, String title, String body) {
        actualID(id);
        System.out.println("after update");
        changeEndpoint(userId,id,title,body);
    }


    @When("User deletes an existing id {int} from endpoint")
    public void userDeletesAnExistingIdFromEndpoint(int id) {
        deleteID(id);


    }


}
