import java.util.Scanner;
public class test {
    @SuppressWarnings("ConvertToTryWithResources")
    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 7, 5, 8};
        System.out.println("Enter the slot which has been allocated to you: "); 
        Scanner sc = new Scanner(System.in);
        int inp = sc.nextInt();
        sc.close();
        try {
            if(inp<=arr.length){
                System.out.println("Slot element is: " + arr[inp]);
            }
        } catch (Exception e) {
            System.out.println("Slot does not exist");
        }
        }
}

        
    

