interface ExperienceDate {
    month: number;
    year: number;
}

interface ExperienceDocument {
    isCurrent: boolean;
    summary: string;
    title: string;
    endDate: ExperienceDate;
    startDate: ExperienceDate;
    company: {
        name: string,
    };
}
