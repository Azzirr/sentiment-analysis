import { fetchData } from "../api/sentimentAnalysis";

global.fetch = jest.fn() as jest.Mock;

describe("fetchData tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should return an error if input is empty", async () => {
    const result = await fetchData("");
    expect(result).toEqual({ error: "Wprowadź tekst do analizy!" });
  });

  test("should return sentiment analysis data when API response is valid", async () => {
    const mockResponse = [{ label: "POSITIVE", score: 0.95 }];
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([mockResponse]),
    });

    const result = await fetchData("I love programming!");
    expect(result).toEqual({ data: [mockResponse], sentiment: "POSITIVE" });
  });

  test("should handle API errors", async () => {
    (fetch as jest.Mock).mockResolvedValue({ ok: false });

    const result = await fetchData("Bad request");
    expect(result).toEqual({ error: "Błąd serwera!" });
  });

  test("should handle unexpected server errors", async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error("Błąd serwera!"));

    const result = await fetchData("Unexpected error test");
    expect(result).toEqual({ error: "Błąd serwera!" });
  });

  test("should return UNKNOWN sentiment if API response is wrong", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([{}]),
    });

    const result = await fetchData("No data");
    expect(result).toEqual({ data: [{}], sentiment: "UNKNOWN" });
  });
});
