public class Maintest {
    public static void main(String[]arg) {

        Student s1 = new Student();

        s1.setName("Max");
        s1.setAge(30);

        System.out.println("Name:" + s1.getName());
        System.out.println("Age" + s1.getAge());
        System.out.println("Nationality" + s1.nationality);

        s1.speak();
        s1.study();


    }

}