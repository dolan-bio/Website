declare type GithubEventType = "PushEvent" | "IssueCommentEvent" | "IssuesEvent";

declare interface GitHubEvent {
    id: string,
    type: GithubEventType,
    actor: {
        id: number,
        login: string,
        display_login: string,
        gravatar_id: string,
        url: string,
        avatar_url: string
    },
    repo: {
        id: number,
        name: string,
        url: string
    },
    payload: object,
    public: boolean,
    created_at: string,
    org: {
        id: number,
        login: string,
        gravatar_id: string,
        url: string,
        avatar_url: string
    }
}
