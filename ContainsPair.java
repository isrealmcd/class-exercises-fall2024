import java.util.Arrays;
import java.util.List;

public class ContainsPair {
    public static boolean containsPair(List<Integer> l) {
        for (int i = 0; i < (l.size() - 1); i++) {
            for (int j = i + 1; j < l.size(); j++) {
                if (l.get(i).equals(l.get(j))) {
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        // Example list with a matching pair
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 3);
        boolean result = containsPair(list);

        // Output the result
        System.out.println("The list contains a matching pair: " + result);
    }
}
