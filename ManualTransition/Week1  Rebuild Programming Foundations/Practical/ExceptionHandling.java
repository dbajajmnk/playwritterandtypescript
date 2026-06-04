public class ExceptionHandling{

    public static void main(String[] args) {

        try {

            int a = 5 / 0;
            
        }
         catch (Exception e) {
            System.out.println("Handled");
            System.out.println(e.getMessage());
            System.out.println("Retrying...");

         }
         finally {
            System.out.println("cleanup");
         }
         
         String name =  null; 

        try {
            System.out.println(name.length());

        } catch (Exception e) {

            System.out.println("Null handled");
        }


        }

    }
