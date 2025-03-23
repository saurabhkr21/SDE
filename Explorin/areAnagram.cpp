#include <stdbool.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Comparison function for qsort
int compare(const void *a, const void *b) {
    return (*(char *)a - *(char *)b);
}

bool areAnagrams(char s1[], char s2[]) {
    int l1 = strlen(s1);
    int l2 = strlen(s2);

    // If lengths are different, they can't be anagrams
    if (l1 != l2) {
        return false;
    }

    // Sort both strings
    qsort(s1, l1, sizeof(char), compare);
    qsort(s2, l2, sizeof(char), compare);

    // Compare sorted strings
    return strcmp(s1, s2) == 0;
}

int main() {
    int t;
    scanf("%d", &t);

    while (t--) {
        // Allocate memory for strings
        char c[100005], d[100005];

        // Input the strings
        scanf("%s", c);
        scanf("%s", d);

        // Check if they are anagrams and print the result
        if (areAnagrams(c, d))
            printf("true\n");
        else
            printf("false\n");

        printf("%s\n", "~");
    }

    return 0;
}
