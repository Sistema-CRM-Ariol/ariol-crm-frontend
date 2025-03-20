
export interface ClientSummary {
    id:        string;
    nit:       string;
    name:      string;
    address:   string;
    emails:    string[];
    phones:    string[];
    position:  string;
    isActive:  boolean;
    createdAt: Date;
}
