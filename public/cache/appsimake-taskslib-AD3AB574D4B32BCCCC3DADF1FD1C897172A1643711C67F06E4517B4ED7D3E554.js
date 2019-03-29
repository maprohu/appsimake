if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-taskslib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-taskslib'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-taskslib'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-taskslib'.");
}
this['appsimake-taskslib'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Lib = $module$appsimake_commonshr.commonshr.Lib;
  var coll = $module$appsimake_commonshr.commonshr.coll_4okrys$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var RxBase = $module$appsimake_commonshr.commonshr.properties.RxBase;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  TaskStatus.prototype = Object.create(Enum.prototype);
  TaskStatus.prototype.constructor = TaskStatus;
  Task.prototype = Object.create(RxBase.prototype);
  Task.prototype.constructor = Task;
  Task$Companion.prototype = Object.create(Task.prototype);
  Task$Companion.prototype.constructor = Task$Companion;
  Tag.prototype = Object.create(RxBase.prototype);
  Tag.prototype.constructor = Tag;
  Tag$Companion.prototype = Object.create(Tag.prototype);
  Tag$Companion.prototype.constructor = Tag$Companion;
  Note.prototype = Object.create(RxBase.prototype);
  Note.prototype.constructor = Note;
  Note$Companion.prototype = Object.create(Note.prototype);
  Note$Companion.prototype.constructor = Note$Companion;
  HiddenTask.prototype = Object.create(RxBase.prototype);
  HiddenTask.prototype.constructor = HiddenTask;
  var tasksLib;
  function tasks$lambda() {
    return new Task();
  }
  var tasks;
  var tasks_metadata = new PropertyMetadata('tasks');
  function get_tasks($receiver) {
    return tasks.getValue_lrcp0p$($receiver, tasks_metadata);
  }
  function usertags$lambda() {
    return new Tag();
  }
  var usertags;
  var usertags_metadata = new PropertyMetadata('usertags');
  function get_usertags($receiver) {
    return usertags.getValue_lrcp0p$($receiver, usertags_metadata);
  }
  function hiddenTasks$lambda() {
    return new HiddenTask();
  }
  var hiddenTasks;
  var hiddenTasks_metadata = new PropertyMetadata('hiddenTasks');
  function get_hiddenTasks($receiver) {
    return hiddenTasks.getValue_lrcp0p$($receiver, hiddenTasks_metadata);
  }
  function notes$lambda() {
    return new Note();
  }
  var notes;
  var notes_metadata = new PropertyMetadata('notes');
  function get_notes($receiver) {
    return notes.getValue_lrcp0p$($receiver, notes_metadata);
  }
  function TaskStatus(name, ordinal, completed) {
    Enum.call(this);
    this.completed = completed;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TaskStatus_initFields() {
    TaskStatus_initFields = function () {
    };
    TaskStatus$New_instance = new TaskStatus('New', 0, false);
    TaskStatus$Started_instance = new TaskStatus('Started', 1, false);
    TaskStatus$Completed_instance = new TaskStatus('Completed', 2, true);
    TaskStatus$Canceled_instance = new TaskStatus('Canceled', 3, true);
    TaskStatus$Companion_getInstance();
  }
  var TaskStatus$New_instance;
  function TaskStatus$New_getInstance() {
    TaskStatus_initFields();
    return TaskStatus$New_instance;
  }
  var TaskStatus$Started_instance;
  function TaskStatus$Started_getInstance() {
    TaskStatus_initFields();
    return TaskStatus$Started_instance;
  }
  var TaskStatus$Completed_instance;
  function TaskStatus$Completed_getInstance() {
    TaskStatus_initFields();
    return TaskStatus$Completed_instance;
  }
  var TaskStatus$Canceled_instance;
  function TaskStatus$Canceled_getInstance() {
    TaskStatus_initFields();
    return TaskStatus$Canceled_instance;
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function TaskStatus$Companion() {
    TaskStatus$Companion_instance = this;
    var $receiver = TaskStatus$values();
    var destination = LinkedHashMap_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var key = element.completed;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    this.byCompleted = destination;
  }
  TaskStatus$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TaskStatus$Companion_instance = null;
  function TaskStatus$Companion_getInstance() {
    TaskStatus_initFields();
    if (TaskStatus$Companion_instance === null) {
      new TaskStatus$Companion();
    }
    return TaskStatus$Companion_instance;
  }
  TaskStatus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TaskStatus',
    interfaces: [Enum]
  };
  function TaskStatus$values() {
    return [TaskStatus$New_getInstance(), TaskStatus$Started_getInstance(), TaskStatus$Completed_getInstance(), TaskStatus$Canceled_getInstance()];
  }
  TaskStatus.values = TaskStatus$values;
  function TaskStatus$valueOf(name) {
    switch (name) {
      case 'New':
        return TaskStatus$New_getInstance();
      case 'Started':
        return TaskStatus$Started_getInstance();
      case 'Completed':
        return TaskStatus$Completed_getInstance();
      case 'Canceled':
        return TaskStatus$Canceled_getInstance();
      default:throwISE('No enum constant taskslib.TaskStatus.' + name);
    }
  }
  TaskStatus.valueOf_61zpoe$ = TaskStatus$valueOf;
  function subs$process(closure$max, closure$min, closure$result) {
    return function closure$process(head, rest) {
      var tmp$ = head.size < closure$max;
      if (tmp$) {
        tmp$ = !rest.isEmpty();
      }
      if (tmp$) {
        var head2 = plus(head, first(rest));
        if (head2.size >= closure$min) {
          closure$result.add_11rb$(head2);
        }
        var rest2 = drop(rest, 1);
        closure$process(head2, rest2);
        closure$process(head, rest2);
      }
    };
  }
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function subs($receiver, min, max) {
    var result = ArrayList_init();
    var process = subs$process(max, min, result);
    process(emptyList(), toList($receiver));
    return result;
  }
  var MaxTagIndexSize;
  var killable = $module$appsimake_commonshr.killable;
  var toList_0 = Kotlin.kotlin.collections.toList_us0mfu$;
  var EnumProp_init = $module$appsimake_commonshr.commonshr.properties.EnumProp;
  var wrapFunction = Kotlin.wrapFunction;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var PropertyList$enum$lambda = wrapFunction(function () {
    var PropertyType_init = $module$appsimake_commonshr.commonshr.properties.PropertyType;
    function enumType$lambda(e, f) {
      return e.name;
    }
    function enumType$lambda_0(typeClosure$E, isE) {
      return function (d, f) {
        return typeClosure$E.valueOf_61zpoe$(d);
      };
    }
    var linked = $module$appsimake_commonshr.rx.linked_g2t76q$;
    function toName$lambda(it) {
      return it.name;
    }
    function toName$lambda_0(typeClosure$E, isE) {
      return function (it) {
        return typeClosure$E.valueOf_61zpoe$(it);
      };
    }
    return function (typeClosure$E, isE, closure$v, this$PropertyList) {
      return function (name) {
        var type = new PropertyType_init(void 0, void 0, enumType$lambda, enumType$lambda_0(typeClosure$E, isE));
        var rxv = this$PropertyList.addProperty_5wvcos$(name, closure$v, type);
        var tmp$ = type.writeDynamic;
        var E_0 = typeClosure$E;
        var isE_0 = isE;
        return new EnumProp_init(name, rxv, tmp$, linked(rxv, killable.HasNoKill, toName$lambda, toName$lambda_0(E_0, isE_0)), toList_0(typeClosure$E.values()));
      };
    };
  });
  function Task() {
    Task$Companion_getInstance();
    RxBase.call(this);
    this.title_f5ctn8$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, Task$title_metadata);
    this.text_d9eg91$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, Task$text_metadata);
    var $this = this.o;
    this.status_xo655i$_0 = named(PropertyList$enum$lambda(TaskStatus, Kotlin.isInstanceOf(TaskStatus), TaskStatus$New_getInstance(), $this)).provideDelegate_n5byny$(this, Task$status_metadata);
    this.tags_d9hctt$_0 = this.o.set_287e2$().provideDelegate_n5byny$(this, Task$tags_metadata);
    this.ts_n9ol2h$_0 = this.o.serverTimestamp().provideDelegate_n5byny$(this, Task$ts_metadata);
    this.completed_6mdlkv$_0 = this.o.calc_26ey0h$(void 0, Task$completed$lambda(this)).provideDelegate_n5byny$(this, Task$completed_metadata);
    this.tagsx_f0qbpp$_0 = this.o.lazySet_iof1yq$(void 0, void 0, Task$tagsx$lambda(this)).provideDelegate_n5byny$(this, Task$tagsx_metadata);
  }
  var Task$title_metadata = new PropertyMetadata('title');
  Object.defineProperty(Task.prototype, 'title', {
    get: function () {
      return this.title_f5ctn8$_0.getValue_lrcp0p$(this, Task$title_metadata);
    }
  });
  var Task$text_metadata = new PropertyMetadata('text');
  Object.defineProperty(Task.prototype, 'text', {
    get: function () {
      return this.text_d9eg91$_0.getValue_lrcp0p$(this, Task$text_metadata);
    }
  });
  var Task$status_metadata = new PropertyMetadata('status');
  Object.defineProperty(Task.prototype, 'status', {
    get: function () {
      return this.status_xo655i$_0.getValue_lrcp0p$(this, Task$status_metadata);
    }
  });
  var Task$tags_metadata = new PropertyMetadata('tags');
  Object.defineProperty(Task.prototype, 'tags', {
    get: function () {
      return this.tags_d9hctt$_0.getValue_lrcp0p$(this, Task$tags_metadata);
    }
  });
  var Task$ts_metadata = new PropertyMetadata('ts');
  Object.defineProperty(Task.prototype, 'ts', {
    get: function () {
      return this.ts_n9ol2h$_0.getValue_lrcp0p$(this, Task$ts_metadata);
    }
  });
  var Task$completed_metadata = new PropertyMetadata('completed');
  Object.defineProperty(Task.prototype, 'completed', {
    get: function () {
      return this.completed_6mdlkv$_0.getValue_lrcp0p$(this, Task$completed_metadata);
    }
  });
  var Task$tagsx_metadata = new PropertyMetadata('tagsx');
  Object.defineProperty(Task.prototype, 'tagsx', {
    get: function () {
      return this.tagsx_f0qbpp$_0.getValue_lrcp0p$(this, Task$tagsx_metadata);
    }
  });
  function Task$Companion() {
    Task$Companion_instance = this;
    Task.call(this);
  }
  Task$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Task]
  };
  var Task$Companion_instance = null;
  function Task$Companion_getInstance() {
    if (Task$Companion_instance === null) {
      new Task$Companion();
    }
    return Task$Companion_instance;
  }
  function Task$completed$lambda(this$Task) {
    return function () {
      return this$Task.status.invoke().completed;
    };
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function Task$tagsx$lambda$lambda(closure$t) {
    return function () {
      var $receiver = subs(sorted(closure$t), 2, MaxTagIndexSize);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(get_multiTags(item));
      }
      return toSet(destination);
    };
  }
  function Task$tagsx$lambda(this$Task) {
    return function () {
      var t = this$Task.tags.invoke();
      return lazy(Task$tagsx$lambda$lambda(t));
    };
  }
  Task.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Task',
    interfaces: [RxBase]
  };
  function get_multiTags($receiver) {
    return joinToString($receiver, ';');
  }
  function Tag() {
    Tag$Companion_getInstance();
    RxBase.call(this);
    this.name_k2q0f8$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, Tag$name_metadata);
  }
  var Tag$name_metadata = new PropertyMetadata('name');
  Object.defineProperty(Tag.prototype, 'name', {
    get: function () {
      return this.name_k2q0f8$_0.getValue_lrcp0p$(this, Tag$name_metadata);
    }
  });
  function Tag$Companion() {
    Tag$Companion_instance = this;
    Tag.call(this);
  }
  Tag$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Tag]
  };
  var Tag$Companion_instance = null;
  function Tag$Companion_getInstance() {
    if (Tag$Companion_instance === null) {
      new Tag$Companion();
    }
    return Tag$Companion_instance;
  }
  Tag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tag',
    interfaces: [RxBase]
  };
  function Note() {
    Note$Companion_getInstance();
    RxBase.call(this);
    this.text_pq26zs$_0 = this.o.string_61zpoe$().provideDelegate_n5byny$(this, Note$text_metadata);
    this.ts_etvhbe$_0 = this.o.serverTimestamp().provideDelegate_n5byny$(this, Note$ts_metadata);
  }
  var Note$text_metadata = new PropertyMetadata('text');
  Object.defineProperty(Note.prototype, 'text', {
    get: function () {
      return this.text_pq26zs$_0.getValue_lrcp0p$(this, Note$text_metadata);
    }
  });
  var Note$ts_metadata = new PropertyMetadata('ts');
  Object.defineProperty(Note.prototype, 'ts', {
    get: function () {
      return this.ts_etvhbe$_0.getValue_lrcp0p$(this, Note$ts_metadata);
    }
  });
  function Note$Companion() {
    Note$Companion_instance = this;
    Note.call(this);
  }
  Note$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [Note]
  };
  var Note$Companion_instance = null;
  function Note$Companion_getInstance() {
    if (Note$Companion_instance === null) {
      new Note$Companion();
    }
    return Note$Companion_instance;
  }
  Note.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Note',
    interfaces: [RxBase]
  };
  function HiddenTask() {
    RxBase.call(this);
  }
  HiddenTask.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HiddenTask',
    interfaces: [RxBase]
  };
  var package$taskslib = _.taskslib || (_.taskslib = {});
  Object.defineProperty(package$taskslib, 'tasksLib', {
    get: function () {
      return tasksLib;
    }
  });
  package$taskslib.get_tasks_x4imip$ = get_tasks;
  package$taskslib.get_usertags_x4imip$ = get_usertags;
  package$taskslib.get_hiddenTasks_x4imip$ = get_hiddenTasks;
  package$taskslib.get_notes_yrnr6e$ = get_notes;
  Object.defineProperty(TaskStatus, 'New', {
    get: TaskStatus$New_getInstance
  });
  Object.defineProperty(TaskStatus, 'Started', {
    get: TaskStatus$Started_getInstance
  });
  Object.defineProperty(TaskStatus, 'Completed', {
    get: TaskStatus$Completed_getInstance
  });
  Object.defineProperty(TaskStatus, 'Canceled', {
    get: TaskStatus$Canceled_getInstance
  });
  Object.defineProperty(TaskStatus, 'Companion', {
    get: TaskStatus$Companion_getInstance
  });
  package$taskslib.TaskStatus = TaskStatus;
  package$taskslib.subs_3ltg2a$ = subs;
  Object.defineProperty(package$taskslib, 'MaxTagIndexSize', {
    get: function () {
      return MaxTagIndexSize;
    }
  });
  Object.defineProperty(Task, 'Companion', {
    get: Task$Companion_getInstance
  });
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$taskslib.Task = Task;
  package$taskslib.get_multiTags_d2950k$ = get_multiTags;
  Object.defineProperty(Tag, 'Companion', {
    get: Tag$Companion_getInstance
  });
  package$taskslib.Tag = Tag;
  Object.defineProperty(Note, 'Companion', {
    get: Note$Companion_getInstance
  });
  package$taskslib.Note = Note;
  package$taskslib.HiddenTask = HiddenTask;
  tasksLib = new Lib('tasks');
  tasks = coll(tasks$lambda);
  usertags = coll(usertags$lambda);
  hiddenTasks = coll(hiddenTasks$lambda);
  notes = coll(notes$lambda);
  MaxTagIndexSize = 4;
  Kotlin.defineModule('appsimake-taskslib', _);
  return _;
}(typeof this['appsimake-taskslib'] === 'undefined' ? {} : this['appsimake-taskslib'], kotlin, this['appsimake-commonshr']);
