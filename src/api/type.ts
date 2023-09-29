export type weatherResType = {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	current_weather: Current_weather;
	daily_units: Daily_units;
	daily: Daily;
}
export type Current_weather = {
	temperature: number;
	windspeed: number;
	winddirection: number;
	weathercode: number;
	is_day: number;
	time: string;
}
export type Daily_units = {
	time: string;
	temperature_2m_max: string;
	temperature_2m_min: string;
}
export type Daily = {
	time: string[];
	temperature_2m_max: number[];
	temperature_2m_min: number[];
}