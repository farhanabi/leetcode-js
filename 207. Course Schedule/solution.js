/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Map();
    const visited = new Map();
    const visiting = new Map();
    
    for (const [course, prereq] of prerequisites) {
        if (!graph.has(course)) graph.set(course, []);
        graph.get(course).push(prereq);
    }
    
    function traverse(course) {
        if (visited.has(course)) return visited.get(course);
        if (visiting.has(course)) return false;
        visiting.set(course, true);
        const prereqs = graph.get(course);
        if (prereqs) {
            for (const prereq of prereqs) {
                if (!traverse(prereq)) return false;
            }
        }
        visiting.delete(course);
        visited.set(course, true);
        return true;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!traverse(i)) return false;
    }
    
    return true;
};