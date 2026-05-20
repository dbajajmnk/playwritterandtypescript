public class PracticeFunction {

public static void main(String[] args){
   int result = add(10,20);
   int divide = sum(80,80);
   String intro = intr("Bob", "Ami", "Kam");





   System.out.println(login( "admin","admin123"));
   System.out.println(einloggen(123, 456));
   System.out.println("The sum is: " + result);
   System.out.println("Devide Result: " + divide);
   System.out.println("Title: " + getTitle());
   verifyLogin();
   System.out.println("Names: " + intro);
    
}

    public static int add(int a, int b){
        return a+b;







    }
     public static int sum(int c, int d){
        return c/d;
    }

    public static String intr(String a , String b, String c){
        return a + " " + b + " " + c;
    }



    public static boolean login(String name, String password){
        if(name.equals("admin") && password.equals("admin123")){
            return true; // success
        } else {

            return false; // failure
}
    }

        public static boolean einloggen(int a, int b){
            if(a ==123 && b ==456){
                return true;
               } else { 
                    return false;
                
            }
        
        
    }

    public static String getTitle(){
        return "Dashboard";
}

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
