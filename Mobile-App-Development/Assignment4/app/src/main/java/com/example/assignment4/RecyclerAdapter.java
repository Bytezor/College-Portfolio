package com.example.assignment4;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.RadioButton;
import android.widget.CheckBox;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;

public class RecyclerAdapter extends RecyclerView.Adapter<RecyclerAdapter.TaskViewHolder> {
    // declare variables
    private ArrayList<RecyclerAssets> tasksList;
    private int selectedPosition = -1; // -1 indicates no task is selected
    // constructor, takes an ArrayList of tasks and assigns it to adapter
    public RecyclerAdapter(ArrayList<RecyclerAssets> tasksList) {
        this.tasksList = tasksList;
    }

    // creates a new view from task_item.xml when a new item needs a holder to represent it
    @NonNull
    @Override
    public TaskViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.task_item, parent, false);
        return new TaskViewHolder(v);
    }

    // binds task data to a specific viewholder
    @Override
    public void onBindViewHolder(@NonNull TaskViewHolder holder, int position) {
        RecyclerAssets task = tasksList.get(position);
        // set text fields
        holder.taskTextView.setText(task.getTaskName());
        holder.descriptionTextView.setText(task.getDescription());

        // set completion check, removing old listeners
        holder.completeCheck.setOnCheckedChangeListener(null);
        holder.completeCheck.setChecked(task.getCompleted());
        // update database when a checkbox is clicked
        holder.completeCheck.setOnCheckedChangeListener((buttonView, isChecked) -> {
            task.setCompleted(isChecked);
            DatabaseHelper db = new DatabaseHelper(holder.itemView.getContext());
            db.updateTaskCompletion(task.getId(), isChecked);
        });

        // marks a radiobutton as checked if it's item is currently selected
        holder.deleteRadioButton.setChecked(position == selectedPosition);
        holder.deleteRadioButton.setOnClickListener(v -> {
            int previousPosition = selectedPosition;
            selectedPosition = holder.getAdapterPosition();

            //refresh selections
            if (previousPosition != -1) notifyItemChanged(previousPosition);
            notifyItemChanged(selectedPosition);
        });
    }

    // returns total number of items in RecyclerView
    public int getItemCount() {
        return tasksList.size();
    }

    // returns the index of the task whose radio button is currently selected
    public int getSelectedPosition() {
        return selectedPosition;
    }

    // clears any selected tasks
    public void clearSelectedIndex() {
        int previousPosition = selectedPosition;
        selectedPosition = -1;
        if (previousPosition != -1) {
            notifyItemChanged(previousPosition);
        }
    }

    // individual task item views inside RecyclerView
    static class TaskViewHolder extends RecyclerView.ViewHolder {
        TextView taskTextView;
        TextView descriptionTextView;
        CheckBox completeCheck;
        RadioButton deleteRadioButton;

        // connects XML views with java
        public TaskViewHolder(@NonNull View itemView) {
            super(itemView);

            taskTextView = itemView.findViewById(R.id.textView);
            descriptionTextView = itemView.findViewById(R.id.descriptionView);
            completeCheck = itemView.findViewById(R.id.completeCheck);
            deleteRadioButton = itemView.findViewById(R.id.deleteButton);
        }
    }
}
