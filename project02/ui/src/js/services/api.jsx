const rootURL = "http://localhost:8000";

// React Task 1:
export async function fetchUser(username) {
    // replace this code with functionality that actually
    // queries that correct endpoint:
    const response = await fetch(`http://127.0.0.1:8000/api/users/${username}`);
    if (!response.ok) {
        throw new Error(`Error fetching user: ${response.statusText}`);
    }
    return response.json();
}

// React Task 3:
export async function fetchCourses(options = {}) {
    let baseURL = `${rootURL}/api/courses?`;
    if (options.department) {
        baseURL += `department=${options.department}&`;
    }
    if (options.instructor) {
        baseURL += `instructor=${options.instructor}&`;
    }
    if (options.hours) {
        baseURL += `hours=${options.hours}&`;
    }
    if (options.title) {
        baseURL += `title=${options.title}&`;
    }
    if (options.classifications && options.classifications.length > 0) {
        baseURL += `classifications=${options.classifications.join(",")}&`;
    }
    if (options.days && options.days.length > 0) {
        baseURL += `days=${options.days.join(",")}&`;
    }
    if (options.open !== undefined) {
        baseURL += `open=${options.open}&`;
    }
    console.log("Final URL:", baseURL);
    const response = await fetch(baseURL);
    if (!response.ok) {
        throw new Error(`Error fetching courses: ${response.statusText}`);
    }
    const courses = await response.json();
    console.log(courses);
    return courses;
}

export async function fetchSchedule(username) {
    const response = await fetch(`${rootURL}/api/schedules/${username}`);
    return await response.json();
}

export async function deleteCourseFromSchedule(schedule, crn) {
    const url = `${rootURL}/api/schedules/${schedule.id}/courses/${crn}`;
    const response = await fetch(url, {
        method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export async function addCourseToSchedule(schedule, crn) {
    console.log(crn);
    const url = `${rootURL}/api/schedules/${schedule.id}/courses`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            crn: crn,
        }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}
