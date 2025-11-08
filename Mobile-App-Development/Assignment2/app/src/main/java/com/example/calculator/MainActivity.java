package com.example.calculator;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.RadioGroup;
import android.widget.RadioButton;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);

        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        EditText input1 = findViewById(R.id.firstNumberPrompt);
        EditText input2 = findViewById(R.id.secondNumberPrompt);
        Button clearButton = findViewById(R.id.clearButton);
        RadioGroup radioGroup = findViewById(R.id.radioGroup);
        Button calculateButton = findViewById(R.id.calculateButton);
        TextView result = findViewById(R.id.calculationResults);


        clearButton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View view) {
                Toast.makeText(getApplicationContext(), "Prompts cleared!", Toast.LENGTH_SHORT).show();
                clear(input1, input2, result, radioGroup);
            }
        });

        calculateButton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View view) {
                int radioID = radioGroup.getCheckedRadioButtonId();
                View radioButton = radioGroup.findViewById(radioID);
                int radioIndex = radioGroup.indexOfChild(radioButton);
                switch (radioIndex) {
                    case 0:
                        addNumbers(input1, input2, result);
                        break;
                    case 1:
                        subtractNumbers(input1, input2, result);
                        break;
                    default:
                        Toast.makeText(getApplicationContext(), "Select an operator first.", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }

    void addNumbers(EditText firstNum, EditText secondNum, TextView result) {
        String firstNumStr = firstNum.getText().toString();
        String secondNumStr = secondNum.getText().toString();
        if (firstNumStr.isBlank() || secondNumStr.isBlank()) {
            Toast.makeText(getApplicationContext(), "Fill out both number prompts.", Toast.LENGTH_SHORT).show();
        }
        else {
            Double firstNumFlt = Double.parseDouble(firstNumStr);
            Double secondNumFlt = Double.parseDouble(secondNumStr);
            Double calcResult = firstNumFlt + secondNumFlt;
            result.setText(getString(R.string.calc_result, calcResult.toString()));
            Toast.makeText(getApplicationContext(), "Added the numbers!", Toast.LENGTH_SHORT).show();
        }
    }

    void subtractNumbers(EditText firstNum, EditText secondNum, TextView result) {
        String firstNumStr = firstNum.getText().toString();
        String secondNumStr = secondNum.getText().toString();
        if (firstNumStr.isBlank() || secondNumStr.isBlank()) {
            Toast.makeText(getApplicationContext(), "Fill out both number prompts.", Toast.LENGTH_SHORT).show();
        }
        else {
            Double firstNumFlt = Double.parseDouble(firstNumStr);
            Double secondNumFlt = Double.parseDouble(secondNumStr);
            Double calcResult = firstNumFlt - secondNumFlt;
            result.setText(getString(R.string.calc_result, calcResult.toString()));
            Toast.makeText(getApplicationContext(), "Subtracted the numbers!", Toast.LENGTH_SHORT).show();
        }
    }

    void clear(EditText firstInput, EditText secondInput, TextView result, RadioGroup radioGroup) {
        result.setText(getString(R.string.empty_calc));
        firstInput.setText("");
        secondInput.setText("");
        radioGroup.clearCheck();
    }
}