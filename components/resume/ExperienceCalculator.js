/**
 * ExperienceCalculator Component
 * Calculates and updates duration for experience timeline items
 */

export class ExperienceCalculator {
    constructor() {
        this.init();
    }

    init() {
        this.updateDurations();
        // Update durations every minute for "present" roles
        setInterval(() => this.updateDurations(), 60000);
    }

    calculateDuration(startDate, endDate) {
        const start = new Date(startDate);
        const end = endDate === 'present' ? new Date() : new Date(endDate);

        const startYear = start.getFullYear();
        const startMonth = start.getMonth(); // 0-indexed (Jan = 0)
        const endYear = end.getFullYear();
        const endMonth = end.getMonth();

        const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1; // +1 to make it inclusive

        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        let duration = '';
        if (years > 0) {
            duration += `${years} yr${years > 1 ? 's' : ''}`;
        }
        if (months > 0) {
            if (duration) duration += ', ';
            duration += `${months} mo${months > 1 ? 's' : ''}`;
        }
        return duration;
    }

    updateDurations() {
        const timelineItems = document.querySelectorAll('.timeline-item span[data-start-date]');
        timelineItems.forEach((item) => {
            const startDate = item.getAttribute('data-start-date');
            const endDate = item.getAttribute('data-end-date');
            const durationElement = item.querySelector('.duration');

            if (durationElement) {
                const duration = this.calculateDuration(startDate, endDate);
                durationElement.textContent = duration;
            } else if (endDate === 'present') {
                const duration = this.calculateDuration(startDate, 'present');
                item.textContent = `${item.textContent.split('—')[0]} — Present • ${duration}`;
            }
        });
    }
}
