#include <stdio.h>
#include <string.h>

int main() {
    input = "01011100";
    int countZero = 0;
    int countOne = 0;

    // Count the number of zeros and ones in the input string
    for (char c : input) {
        if (c == '0') {
            countZero++;
        } else if (c == '1') {
            countOne++;
        }
    }

    // Construct the output string without sorting
    string output;
    for (int i = 0; i < countZero; i++) {
        output += '0';
    }
    for (int i = 0; i < countOne; i++) {
        output += '1';
    }

    printf("Input : %s\n",input);
    
    printf("output: %s\n",output);

return 0;
}