import { getElement } from '../api/element'

global.fetch = jest.fn()

describe('getElement', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear()
  })

  it('restituisce i risultati quando la fetch ha successo', async () => {
    const mockResults = [
      { id: 1, title: 'Fight Club', media_type: 'movie' },
      { id: 2, name: 'Breaking Bad', media_type: 'tv' },
    ]

    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ results: mockResults })
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse)

    const endpoint = '/trending/all/week'
    const result = await getElement(endpoint)

    expect(result).toEqual(mockResults)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(endpoint),
      expect.any(Object)
    )
  })

  it('lancia un errore se la fetch ritorna ok: false', async () => {
    const mockResponse = {
      ok: false,
      status: 500,
      json: jest.fn()
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse)

    await expect(getElement('/trending/all/day')).rejects.toThrow('Errore nella richiesta a TMDB')
  })

  it('gestisce errori di rete', async () => {
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network Error'))

    await expect(getElement('/trending/all/week')).rejects.toThrow('Network Error')
  })
})
