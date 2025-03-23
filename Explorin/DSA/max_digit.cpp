#include <iostream>
#include <vector>
#include <algorithm>
#include <cstring>
using namespace std;

// Function to check if a number is prime
bool isPrime(int num) {
    if (num <= 1) return false;
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

// Function to find the highest occurring digit in prime numbers in the range
int highestOccurringDigitInPrimes(int L, int R) {
    // Frequency array to count occurrences of digits (0–9)
    int freq[10] = {0};

    // Loop through the range to find primes and count digit frequencies
    bool foundPrime = false; // Flag to check if any prime number exists
    for (int i = L; i <= R; i++) {
        if (isPrime(i)) {
            foundPrime = true;
            int num = i;
            while (num > 0) {
                int digit = num % 10; // Extract last digit
                freq[digit]++;
                num /= 10; // Remove last digit
            }
        }
    }

    // If no prime number is found, return -1
    if (!foundPrime) return -1;

    // Find the digit with the highest frequency
    int maxFreq = 0, resultDigit = -1;
    for (int i = 0; i < 10; i++) {
        if (freq[i] > maxFreq) {
            maxFreq = freq[i];
            resultDigit = i;
        } else if (freq[i] == maxFreq && i > resultDigit) {
            resultDigit = i; // Tie-breaking by choosing the largest digit
        }
    }

    return resultDigit;
}

// Main function
int main() {
    int L, R;
    cout << "Enter the range (L R): ";
    cin >> L >> R;

    int result = highestOccurringDigitInPrimes(L, R);
    if (result != -1) {
        cout << "The highest occurring digit in prime numbers in the range is: " << result << endl;
    } else {
        cout << "No prime numbers in the given range." << endl;
    }

    return 0;
}
