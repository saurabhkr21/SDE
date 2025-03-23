#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);
vector<string> split(const string &);

/*
 * Complete the 'solve' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 *  3. INTEGER c
 */

string solve(int a, int b, int c) {
    set<pair<int, int>> visited;
    queue<pair<int, int>> q;
    q.push({0, 0});
    visited.insert({0, 0});
    while (!q.empty()) {
        auto [x, y] = q.front(); q.pop();
        if (x == c || y == c) return "YES";
        if (visited.find({a, y}) == visited.end()) {
            visited.insert({a, y});
            q.push({a, y});
        }
        if (visited.find({x, b}) == visited.end()) {
            visited.insert({x, b});
            q.push({x, b});
        }
        if (visited.find({0, y}) == visited.end()) {
            visited.insert({0, y});
            q.push({0, y});
        }
        if (visited.find({x, 0}) == visited.end()) {
            visited.insert({x, 0});
            q.push({x, 0});
        }
        int pour1to2 = min(x, b - y);
        if (visited.find({x - pour1to2, y + pour1to2}) == visited.end()) {
            visited.insert({x - pour1to2, y + pour1to2});
            q.push({x - pour1to2, y + pour1to2});
        }
        int pour2to1 = min(y, a - x);
        if (visited.find({x + pour2to1, y - pour2to1}) == visited.end()) {
            visited.insert({x + pour2to1, y - pour2to1});
            q.push({x + pour2to1, y - pour2to1});
        }
    }
    
    return "NO";
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string t_temp;
    getline(cin, t_temp);

    int t = stoi(ltrim(rtrim(t_temp)));

    for (int t_itr = 0; t_itr < t; t_itr++) {
        string first_multiple_input_temp;
        getline(cin, first_multiple_input_temp);

        vector<string> first_multiple_input = split(rtrim(first_multiple_input_temp));

        int a = stoi(first_multiple_input[0]);

        int b = stoi(first_multiple_input[1]);

        int c = stoi(first_multiple_input[2]);

        string result = solve(a, b, c);

        fout << result << "\n";
    }

    fout.close();

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}

vector<string> split(const string &str) {
    vector<string> tokens;

    string::size_type start = 0;
    string::size_type end = 0;

    while ((end = str.find(" ", start)) != string::npos) {
        tokens.push_back(str.substr(start, end - start));

        start = end + 1;
    }

    tokens.push_back(str.substr(start));

    return tokens;
}
