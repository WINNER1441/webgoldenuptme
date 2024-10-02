// مثال على بيانات المشاريع
const projects = [
    { id: 1, name: 'مشروع 1' },
    { id: 2, name: 'مشروع 2' }
];

// دالة لعرض المشاريع
function displayProjects() {
    const projectsList = document.getElementById('projectsList');
    projectsList.innerHTML = ''; // مسح المحتوى الحالي

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-item';

        projectDiv.innerHTML = `
            <h5>${project.name}</h5>
            <button class="btn btn-warning" onclick="renameProject(${project.id})">تعديل الاسم</button>
            <button class="btn btn-info" onclick="goToControlPanel(${project.id})">لوحة التحكم</button>
        `;

        projectsList.appendChild(projectDiv);
    });
}

// دالة لتعديل اسم المشروع
function renameProject(id) {
    const newName = prompt('أدخل اسم المشروع الجديد:');
    if (newName) {
        // تحديث اسم المشروع هنا
        const project = projects.find(p => p.id === id);
        project.name = newName;
        displayProjects();
    }
}

// دالة للدخول إلى لوحة التحكم
function goToControlPanel(id) {
    // هنا يمكنك نقل المستخدم إلى لوحة التحكم الخاصة بالمشروع
    alert('سيتم نقلك إلى لوحة التحكم للمشروع ' + id);
}

// عرض المشاريع عند تحميل الصفحة
window.onload = displayProjects;
