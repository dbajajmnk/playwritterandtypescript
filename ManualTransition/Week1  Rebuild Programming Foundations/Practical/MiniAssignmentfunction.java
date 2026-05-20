public class MiniAssignmentfunction{
    public static void main(String[] args) {
        //simple method
        sayHallo();
        sayHelloTo("Top");
        System.out.println(login( "admin","admin123"));
        String title = getTitle();
        System.out.println("Title: " + title);
        verifyLogin();

    }

    public static void sayHallo() {
       System.out.println("say Hallo"); 
    }

    public static void sayHelloTo(String args) {
        System.out.println("Hello" + args);
        
    }

    //parameter method

    public static boolean login(String name, String password){
        if (name.equals("admin1") && password.equals ("admin123")){
            return true;
            
               }
                else {
                    
                    return false;
            }
    }

            // return method
    public static String getTitle(){
        return "Dashboard";
    }

    // reusable test flow
    public static void verifyLogin(){

        boolean result = login("admin","admin123");

        if(result){
            System.out.println("Login verified");
        }
        else{
            System.out.println("Login failed");
        }
    }
}

    
    



