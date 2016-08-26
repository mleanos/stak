'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Task Schema
 */
var TaskSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Task name',
    trim: true
  },
  parent: {
    type: Schema.ObjectId,
    ref: 'Plan'
  },
  child: {
    type: Schema.ObjectId,
    ref: 'Plan'
  },
  lastbestknown: {
    type: Schema.Types.Mixed
  },
  description: String,
  type: String, //Milestone, Stack, Task
  category: String, //Deploy, Routing, Certiifcation, Infrastructure
  status: String, //Pending, Started, Completed, Canceled
  colorstatus: String, //Green, Yellow, Red from Child plan status
  progress: String, //% from child plan
  sql: {
    is: {
      type: Boolean,
      default: false
    },
    dcs: [String],
    status: String,
    location: String,
    apps: [{
      type: Schema.ObjectId,
      ref: 'App'
    }],
  },
  approved: {
    type: Boolean,
    default: false
  },
  dependents: [{
    type: Schema.ObjectId,
    ref: 'Task'
  }],
  sortOrder: Number,
  duration: Number,
  startTime: Date,
  endTime: Date,
  updatedStart: Date,
  updatedEnd: Date,
  actualStart: Date,
  actualEnd: Date,
  poc: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  team: {
    type: Schema.ObjectId,
    ref: 'Team'
  },
  contact: String,
  notes: String,
  lastPaged: Date,
  createdBy: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  modifiedBy: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  completedBy: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  lastModified: {
    type: Date,
    default: Date.now
  },
  subscribers: [{
    type: String
  }],
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Task', TaskSchema);
