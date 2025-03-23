#include <iostream>
#include <unordered_set>
#include <string>
#include <cctype>  // for tolower

using namespace std;

string pangrams(string s) {
    // Create an unordered set to store unique characters
    unordered_set<char> letters;

    // Convert string to lowercase and process each character
    for (char c : s) {
        // Convert character to lowercase if it is alphabetic
        if (isalpha(c)) {
            letters.insert(tolower(c));  // Store the lowercase version of the letter
        }
    }

    // Check if the set contains all 26 letters
    if (letters.size() == 26) {
        return "pangram";
    } else {
        return "not pangram";
    }
}

int main() {
    string s;
    getline(cin, s);  // Read the input string

    // Call the pangrams function and output the result
    cout << pangrams(s) << endl;

    return 0;
}
