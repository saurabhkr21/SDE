#include <iostream>
#include <vector>
#include <cmath>
#include <numeric>

using namespace std;

// Function to check if a number is prime
bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// Function to find the prime factors of a number
vector<int> primeFactors(int n) {
    vector<int> factors;
    // Divide by 2 until odd
    while (n % 2 == 0) {
        factors.push_back(2);
        n /= 2;
    }
    // Try odd numbers starting from 3
    for (int i = 3; i <= sqrt(n); i += 2) {
        while (n % i == 0) {
            factors.push_back(i);
            n /= i;
        }
    }
    // If n is a prime number greater than 2
    if (n > 2) {
        factors.push_back(n);
    }
    return factors;
}

// Function to calculate the sum of digits of a number
int sumOfDigits(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

// Main function to check if the number is a Smith number
bool isSmithNumber(int n) {
    if (isPrime(n)) return false;  // Smith numbers must be composite
    
    vector<int> factors = primeFactors(n);
    int digitSumOfN = sumOfDigits(n);
    int digitSumOfFactors = 0;

    // Sum of digits of all prime factors (excluding the number itself)
    for (int factor : factors) {
        digitSumOfFactors += sumOfDigits(factor);
    }

    // Check if the sum of digits of the number equals the sum of digits of its prime factors
    return digitSumOfN == digitSumOfFactors;
}

int main() {
    int n;
    cin >> n;

    if (isSmithNumber(n)) {
        cout << "Smith number" << endl;
    } else {
        cout << "Not Smith number" << endl;
    }

    return 0;
}
