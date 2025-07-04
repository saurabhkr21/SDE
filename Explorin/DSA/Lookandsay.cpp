#include <iostream>
#include <string>
#include <vector>
using namespace std;

// Function to generate look-and-say sequence up to n terms
vector<string> lookAndSay(int n) {
    vector<string> sequence;
    if (n <= 0) return sequence;

    string term = "1";
    sequence.push_back(term);

    for (int i = 1; i < n; ++i) {
        string nextTerm = "";
        int count = 1;

        for (int j = 1; j < term.length(); ++j) {
            if (term[j] == term[j - 1]) {
                count++;
            } else {
                nextTerm += to_string(count) + term[j - 1];
                count = 1;
            }
        }
        nextTerm += to_string(count) + term.back();  // Add last group
        sequence.push_back(nextTerm);
        term = nextTerm;
    }

    return sequence;
}

int main() {
    int n;
    cin >> n;

    vector<string> result = lookAndSay(n);
    for (const string& term : result) {
        cout << term << " ";
    }
    cout << endl;

    return 0;
}
