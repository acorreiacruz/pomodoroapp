<template>
    <div>
        <Header/>
        <main class="main-container">
            <div class="container">
                <div class="timer-container">
                    <div class="timer-button-container">
                        <button class="timer-button">Pomodoro</button>
                        <button class="timer-button">Short Break</button>
                        <button class="timer-button">Long Break</button>
                    </div>
                    <div class="timer"><p>00:00</p></div>
                    <div class="btn-start-container">
                        <button class="btn-start">START</button>
                    </div>
                </div>
                <div class="infos-container">
                    <div class="pomodoro-cicle">#1</div>
                    <div class="task-title">Título da Tarefa Aqui!</div>
                </div>
                <div class="tasks-container">
                    <div class="task-header-container">
                        <div class="task-header">Tasks</div>
                        <div class="task-header-btn-container">
                            <button class="task-header-btn" @click="showPopUp('.dropdown')">
                                <i class="fa-sharp fa-solid fa-ellipsis-vertical"></i>
                            </button>
                            <div class="dropdown">
                                <div class="dropdown-btn">
                                    <i class="fa-regular fa-trash-can"></i> Clear finishes tasks
                                </div>
                                <div class="dropdown-btn">
                                    <i class="fa-solid fa-check"></i> Clear act pomodoros
                                </div>
                                <div class="dropdown-btn">
                                    <i class="fa-regular fa-floppy-disk"></i> Save as template
                                </div>
                                <div class="dropdown-btn">
                                    <i class="fa-solid fa-plus"></i> Add from templates
                                </div>
                                <div class="dropdown-btn">
                                    <i class="fa-regular fa-trash-can"></i> Clear all tasks
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="task-list-container">
                        <div class="task">
                            <div class="task-name">
                                <div class="task-name-img"><i class="fa-solid fa-circle-check"></i></div>
                                <div class="name">Tarefa Tal 1</div>
                            </div>
                            <div class="task-infos">
                                <div class="task-cicles">0/1</div>
                                <div class="btn-task-infos-container" @click="showPopUp('.btn-task-infos-popup')">
                                    <button class="btn-task-infos">
                                        <i class="fa-sharp fa-solid fa-ellipsis-vertical"></i>
                                    </button>
                                    <div class="btn-task-infos-popup">
                                        <div class="form-container">
                                            <div class="first-container">
                                                <div class="input-container">
                                                    <input type="text" placeholder="What are you working on ?">
                                                </div>
                                                <div class="input-set">
                                                    <span class="input-set-title">Ect/Est Pomodoros</span>
                                                    <div class="input-set-flex">
                                                        <input class="input-ect" type="number" min="0">
                                                        <span>/</span>
                                                        <input class="input-est-pomodoros" type="text">
                                                        <div class="btn-up">
                                                            <i class="fa-solid fa-caret-up"></i>
                                                        </div>
                                                        <div class="btn-down">
                                                            <i class="fa-solid fa-caret-down"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text-area-container">
                                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                                </div>
                                                <div class="button-set-add">
                                                    <div class="btn-add-note">
                                                        <span>+ Add Note</span>
                                                    </div>
                                                    <div class="btn-add-project">
                                                        <span>+ Add Project</span><i class="fa-solid fa-lock"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="button-set">
                                                <div class="btn-delete">Delete</div>
                                                <div class="flex-button-set">
                                                    <div class="btn-cancel">Cancel</div>
                                                    <div class="btn-save">Save</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="add-task-btn-container">
                        <div class="add-task-btn"><i class="fa-solid fa-circle-plus"></i> Add Task</div>
                    </div>
                    <div class="results-container">
                        <div class="results-inner-container">
                            <div class="results">Est: 6</div>
                            <div class="results">Act: 0</div>
                            <div class="results">Finish At: 04:15</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script src="./home.js"></script>