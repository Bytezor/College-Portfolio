package com.example.calculator;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.*;

import androidx.fragment.app.Fragment;
import androidx.navigation.Navigation;

public class CalcFragment extends Fragment {

    public CalcFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the calculator layout
        View view = inflater.inflate(R.layout.fragment_calc, container, false);

        // Get references to UI elements
        EditText input1 = view.findViewById(R.id.firstNumberPrompt);        // First number input
        EditText input2 = view.findViewById(R.id.secondNumberPrompt);       // Second number input
        Button clearButton = view.findViewById(R.id.clearButton);           // Button to clear inputs
        RadioGroup radioGroup = view.findViewById(R.id.radioGroup);         // Group of operator radio buttons
        Button calculateButton = view.findViewById(R.id.calculateButton);   // Button to perform calculation
        TextView result = view.findViewById(R.id.calculationResults);       // Text to display result
        ImageButton backButton = view.findViewById(R.id.backButton);        // Back button

        // Perform clear function when pressed
        clearButton.setOnClickListener(v -> {
            Toast.makeText(getContext(), "Prompts cleared!", Toast.LENGTH_SHORT).show();
            clear(input1, input2, result, radioGroup); // Clear all inputs and result
        });

        // Perform calculation based on inputs
        calculateButton.setOnClickListener(v -> {
            // Get selected radio button ID
            int radioID = radioGroup.getCheckedRadioButtonId();
            View radioButton = radioGroup.findViewById(radioID);
            int radioIndex = radioGroup.indexOfChild(radioButton); // Find which operation was selected

            // Perform selected operation
            switch (radioIndex) {
                case 0:
                    addNumbers(input1, input2, result);
                    break;
                case 1:
                    subtractNumbers(input1, input2, result);
                    break;
                default:
                    Toast.makeText(getContext(), "Select an operator first.", Toast.LENGTH_SHORT).show();
            }
        });

        // Go back to selection screen
        backButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Navigation.findNavController(view).navigate(R.id.action_calcFragment_to_selectionFragment);
            }
        });

        return view;
    }

    // Adds the two numbers and displays the result
    void addNumbers(EditText firstNum, EditText secondNum, TextView result) {
        String firstNumStr = firstNum.getText().toString();
        String secondNumStr = secondNum.getText().toString();

        // Check if inputs are filled
        if (firstNumStr.isEmpty() || secondNumStr.isEmpty()) {
            Toast.makeText(getContext(), "Fill out both number prompts.", Toast.LENGTH_SHORT).show();
        } else {
            // Parse numbers and perform addition
            Double firstNumFlt = Double.parseDouble(firstNumStr);
            Double secondNumFlt = Double.parseDouble(secondNumStr);
            Double calcResult = firstNumFlt + secondNumFlt;

            // Display result
            result.setText(getString(R.string.calc_result, calcResult.toString()));
            Toast.makeText(getContext(), "Added the numbers!", Toast.LENGTH_SHORT).show();
        }
    }

    // Subtracts the second number from the first and displays the result
    void subtractNumbers(EditText firstNum, EditText secondNum, TextView result) {
        String firstNumStr = firstNum.getText().toString();
        String secondNumStr = secondNum.getText().toString();

        // Check if inputs are filled
        if (firstNumStr.isEmpty() || secondNumStr.isEmpty()) {
            Toast.makeText(getContext(), "Fill out both number prompts.", Toast.LENGTH_SHORT).show();
        } else {
            // Parse numbers and perform subtraction
            Double firstNumFlt = Double.parseDouble(firstNumStr);
            Double secondNumFlt = Double.parseDouble(secondNumStr);
            Double calcResult = firstNumFlt - secondNumFlt;

            // Display result
            result.setText(getString(R.string.calc_result, calcResult.toString()));
            Toast.makeText(getContext(), "Subtracted the numbers!", Toast.LENGTH_SHORT).show();
        }
    }

    // Clears all inputs, result, and radio button selection
    void clear(EditText firstInput, EditText secondInput, TextView result, RadioGroup radioGroup) {
        result.setText(getString(R.string.empty_calc)); // Reset result text
        firstInput.setText(""); // Clear first number input
        secondInput.setText(""); // Clear second number input
        radioGroup.clearCheck(); // Clear radio button selection
    }
}
