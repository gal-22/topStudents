
const topNStudentsAttendees = (students, attendees, N) => {
	const map = new Map()
	for (let i = 0; i < students.length; i++) {
		map.set(students[i], 0)
	}
	for (let i = 0; i < students.length; i++) {
		for (let j = 0; j < attendees.length; j++) {
			if (attendees[j].includes(students[i])) {
				const num = map.get(students[i])
				map.set(students[i], num + 1)
			}
		}
	}
	const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
	const topStundents = Array.from(sortedMap.keys())
	return topStundents.slice(0, Math.min(N, topStundents.length));
}
