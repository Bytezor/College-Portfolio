package com.example.assignment4;

public class RecyclerAssets {
    int id;
    String taskName;
    String description;
    boolean completed;

    //constructor
    public RecyclerAssets(int id, String taskName, String description, boolean completed) {
        this.id = id;
        this.taskName = taskName;
        this.description = description;
        this.completed = completed;
    }

    //getters
    public int getId() {
        return id;
    }
    public String getTaskName() {
        return taskName;
    }
    public String getDescription() {
        return description;
    }
    public boolean getCompleted() {
        return completed;
    }

    //setters
    public void setId(int newId) {
        this.id = newId;
    }
    public void setTaskName(String newName) {
        this.taskName = newName;
    }
    public void setDescription(String newDesc) {
        this.description = newDesc;
    }
    public void setCompleted(boolean newStatus) {
        this.completed = newStatus;
    }
}