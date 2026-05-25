public class StudenTest {
    public static void main(String[] args) {

        Student s1= new Student();

        s1.name= "Max";
        s1.age= 30;

        System.out.println(s1.name);
        System.out.println(s1.age);

        System.out.println(s1.nationality);

        s1.speak();
    }
}