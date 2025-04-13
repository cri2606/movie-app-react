import { search } from '../api/search'

global.fetch = jest.fn()

describe('search', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear()
  })

  it('restituisce risultati con media_type "movie"', async () => {
    const mockResults = [
      { id: 1, title: 'Interstellar' }
    ]

    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ results: mockResults })
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse)

    const endpoint = '/search/movie?query=interstellar'
    const result = await search(endpoint)

    expect(result).toEqual([
      { id: 1, title: 'Interstellar', media_type: 'movie' }
    ])
    expect(global.fetch).toHaveBeenCalledWith(
      // `${endpoint}&api_key=YOUR_API_KEY`,
      expect.stringContaining('/search/movie?query=interstellar'),
      expect.any(Object)
    )
  })

  it('restituisce risultati con media_type "person"', async () => {
    const mockResults = [
      { id: 2, name: 'Leonardo DiCaprio' }
    ]

    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ results: mockResults })
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse)

    const endpoint = '/search/person?query=leonardo'
    const result = await search(endpoint)

    expect(result).toEqual([
      { id: 2, name: 'Leonardo DiCaprio', media_type: 'person' }
    ])
  })

  it('restituisce risultati con media_type "tv"', async () => {
    const mockResults = [
      { id: 3, name: 'Stranger Things' }
    ]

    const mockResponse = {
      ok: true,
      json: () => Promise.resolve({ results: mockResults })
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse)

    const endpoint = '/search/tv?query=stranger'
    const result = await search(endpoint)

    expect(result).toEqual([
      { id: 3, name: 'Stranger Things', media_type: 'tv' }
    ])
  })

  it('lancia errore su HTTP response non ok', async () => {
    const mockResponse = {
      ok: false,
      status: 404,
      json: jest.fn()
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse)

    await expect(search('/search/movie?query=test')).rejects.toThrow('Errore nella richiesta a TMDB')
  })

  it('gestisce errori di rete', async () => {
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network Error'))

    await expect(search('/search/tv?query=test')).rejects.toThrow('Network Error')
  })
})
