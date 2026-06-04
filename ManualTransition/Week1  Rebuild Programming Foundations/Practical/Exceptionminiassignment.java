public class Exceptionminiassignment {

    public static void main(String[] args) {

try {

int a = 10/ 0;
    
}

 catch(Exception e) {

    System.out.println("Handle");
    System.out.println("Retry");

}

finally {

    System.out.println("Cleanup");
}

String name = null;

try{

    System.out.println(name.length());


}

    catch(Exception e) {


        System.out.println("Null handeld");
    }

}
}
