import java.util.ArrayList;
import java.util.HashSet;

public class CollectionTest {
    public static void main(String[] args) {
       String[] names = { "Alice", "Bob",  "Charlie", "Diana", "Eve"  ,"Frank","Grace", "Heidi", "Ivan","Judy"};
       int[] numbers = {3, 3, 3, 3, 5, 6, 7, 8, 9, 10};
       ArrayList<String> nameList = new ArrayList<String>();

        nameList.add("Alice");
        nameList.add("Bob");
        nameList.add("Charlie");
        nameList.add("Diana");
        nameList.add("Bakht");
        nameList.remove("Bob");
        nameList.addAll(java.util.Arrays.asList(names));
        nameList.removeAll(java.util.Arrays.asList("Alice", "Charlie"));
       
for (String string : nameList) {
    //System.out.println(string);
}

HashSet<String> nameSet = new HashSet<String>();
nameSet.add("Alice");
nameSet.add("Bob");
nameSet.add("Charlie");
nameSet.add("Charlie");
nameSet.add("Diana");
nameSet.add("Charlie");
System.out.println("Names in the set:");
for (String string : nameSet) {
    System.out.println(string);
}

        int sum = numbers[0] +  numbers[2]; 
        System.out.println("Sum of first and third numbers: " + sum);
        System.out.println("Names in the collection:"+names[5]);
        int numberLength = numbers.length;
        System.out.println("Length of numbers collection: " + numberLength);

    }
}