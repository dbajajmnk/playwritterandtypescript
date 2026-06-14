public class loginflow{

    static boolean login(String username, String password){

        if(username.equals ("admin") && password.equals ("1234")){

            return true;
        }
        else {

            return false;
        }

   


    }
    static boolean validateTitel(String actualTitel, String expectedTitel){

        if(actualTitel.equals(expectedTitel)){
                  return true;
        }
        else {

            return false;
        }
        }

    
    public static void main(String[] args) {
        String username = "admin";
        String password = "1234";
        
    boolean result = login(username, password);

    int retries = 0;

    while (!result && retries <3){

        System.out.println("Retrying login...");
        result = login(username, password);

        retries++;

    }
    if (result) {
        System.out.println("Login Successful");
    }
    else {
        System.out.println("Login Failed");
    }

    String actualTitel= "Dashboard";
    String expectedTitel= "Dashboard";

    boolean titelresult= validateTitel(actualTitel, expectedTitel);

    if (titelresult) {
        System.out.println("Successful");
    }
    else {
        System.out.println("Failed");
    }

    System.out.println("Summary");

  

}
}
