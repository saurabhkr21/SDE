#include <iostream>
#include <unordered_set>
#include <string>

using namespace std;

string twoStrings(string s1, string s2) {
    // Convert both strings to sets of characters
    unordered_set<char> set1(s1.begin(), s1.end());
    unordered_set<char> set2(s2.begin(), s2.end());

    // Check if there is any common character between the two sets
    for (char c : set1) {
        if (set2.find(c) != set2.end()) {
            return "YES";  // If we find a common character
        }
    }

    // If no common character is found
    return "NO";
}

int main() {
    int t;
    cin >> t;  // Read number of test cases

    while (t--) {
        string s1, s2;
        cin >> s1 >> s2;  // Read the two strings

        // Output the result for each test case
        cout << twoStrings(s1, s2) << endl;
    }

    return 0;
}
