import java.util.ArrayList;
public class PracticeCollection {
    public static void main(String[] args) {
       String[] users = {"Alice", "Bon", "Bog" };
       ArrayList<String> userlist = new ArrayList<>();

       userlist.add("Pappu");
       userlist.add("Sunny");

    for (String user : users) {

    System.out.println(user);
    }

    System.out.println(users[2]);

    
    System.out.println("ArrayList values:");
    for(String user : userlist ){
    System.out.println(user);

    }
}

}   
