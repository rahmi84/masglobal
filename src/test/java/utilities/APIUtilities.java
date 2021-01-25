package utilities;

import io.cucumber.core.internal.gherkin.deps.com.google.gson.JsonObject;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.testng.Assert;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class APIUtilities {
    protected static RequestSpecification spec02 = new RequestSpecBuilder().
            setBaseUri("http://34.214.132.186:3000/posts").
            build();

    static Response response=given().spec(spec02).contentType(ContentType.JSON).when().get();



    public static void callEndPoint() {

        response = given().
                when().get(ConfigReader.getProperty("end_point"));
        response.prettyPrint();
    }

    public static void changeEndpoint(Integer userId, Integer id, String title,String body) {

        Map<String, Object> req = new HashMap<>();
        req.put("userId", userId);
        req.put("id", id);
        req.put("title", title);
        req.put("body", body);
        spec02.pathParam("id",id);
        Response response = given().contentType(ContentType.JSON).
                spec(spec02).
                body(req).when().put("/{id}");
        response.prettyPrint();
    }

    public static void actualID(int param) {
        spec02.pathParam("id", param);
        response = given().spec(spec02).
                  contentType(ContentType.JSON).
                  when().get("/{id}");
        response.prettyPrint();
    }
    public static void createNewUser( String title,String body) {
        Map<String, Object> req = new HashMap<>();
        req.put("userId", 12);
        req.put("id", null);
        req.put("title", title);
        req.put("body", body);
        Response response = given().spec(spec02)
                .contentType(ContentType.JSON).
                        body(req).when().post();
        response.then().assertThat().statusCode(201);
        response.prettyPrint();
        System.out.println("Lets verify the created id");
        Map<String,Object>created=response.as(HashMap.class);
        Assert.assertTrue(created.containsKey("id"));
        System.out.println(created.get("id"));
    }
    public static void deleteID(int param) {
        spec02.pathParam("id", param);
        response = given().spec(spec02).
                contentType(ContentType.JSON).
                when().delete("/{id}");
          //response.then().statusCode(500);
//    public  static void ifDoesNotContain(int id){
//        Map<String,Object>responseF=response.as(HashMap.class);
//        Assert.assertFalse(responseF.containsValue(id));
//    }

}}
