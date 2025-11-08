package com.example.assignment4;

import android.os.Bundle;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.appcompat.app.AppCompatActivity;
import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    // variable declaration
    private DatabaseHelper databaseHelper;
    private EditText taskInput;
    private EditText descriptionInput;
    private RecyclerView taskRecyclerList;
    private RecyclerAdapter adapter;
    private ArrayList<RecyclerAssets> tasksList;


    // load the UI, connect to the database, and initialize listeners for buttons
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // initialization of database and ui elements
        databaseHelper = new DatabaseHelper(this);
        taskInput = findViewById(R.id.taskInput);
        descriptionInput = findViewById(R.id.descriptionInput);
        taskRecyclerList = findViewById(R.id.taskRecyclerList);
        Button addTaskButton = findViewById(R.id.addButton);
        Button deleteTaskButton = findViewById(R.id.deleteConfirm);
        // load existing tasks and display them
        tasksList = databaseHelper.getAllTasks();
        adapter = new RecyclerAdapter(tasksList);
        taskRecyclerList.setAdapter(adapter);
        taskRecyclerList.setLayoutManager(new LinearLayoutManager(this));
        // adds new task when clicking "Add" button
        addTaskButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String task = taskInput.getText().toString();
                String description = descriptionInput.getText().toString();
                if (!task.isEmpty()) {
                    databaseHelper.insertData(task, description);
                    // refresh RecyclerView to reflect new data, and clear input fields
                    tasksList.clear();
                    tasksList.addAll(databaseHelper.getAllTasks());
                    adapter.notifyDataSetChanged();
                    taskInput.setText("");
                    descriptionInput.setText("");
                }
            }
        });

        // deletes currently selected task when "Delete" button is clicked
        deleteTaskButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int selectedTaskIndex = adapter.getSelectedPosition();
                if (selectedTaskIndex != -1) {
                    databaseHelper.deleteTask(tasksList.get(selectedTaskIndex).getId());
                    // refresh RecyclerView to reflect new data
                    tasksList.clear();
                    tasksList.addAll(databaseHelper.getAllTasks());
                    adapter.clearSelectedIndex();
                    adapter.notifyDataSetChanged();
                }
            }
        });
    }
}