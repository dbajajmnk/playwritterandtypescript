public class FunctionExample{

    public static void main(String[] args) {
    sayHello();
        sayHello();
        sayHelloTo("Deepak");
        sayHelloTo("Bakt");
        intro("Deepak","1234567890","dk@gmail.com");
        
        int sum = add(109, 200);
        System.out.println("The sum is " + sum);
        printTable(5);
        int max = findMax(10, 20);
        System.out.println("The maximum is " + max);

    }
/**
 * name 
 * parameter input values Optional
 * return value Optional 
 * body of the function
 */
    public static void sayHello(){
        System.out.println("Hello");
    }

    public static void intro(String name,String phone,String email){
        System.out.println("My Name is "+name);
        System.out.println("My Phone is "+phone);
        System.out.println("My Email is "+email);

    }

    public static void sayHelloTo(String name){
        System.out.println("Hello " + name);
    }

    public static int add(int a, int b){
        return a + b;
    }

    public static boolean login(String name, String password){
        if(name.equals("admin") && password.equals("admin123")){
            return true; // success
        } else {
            return false; // failure
        }
    }

    public static void printTable(int n){
        for(int i = 1; i <= 10; i++){
            System.out.println(n + " x " + i + " = " + (n * i));
        }
    }


    public static int findMax(int a, int b){
        if(a > b){
            return a;
        } else {
            return b;
        }
    }
}