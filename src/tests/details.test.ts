import { getDetails } from '../api/details'

global.fetch = jest.fn()

describe('getDetails', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear()
  })

  it('restituisce i dettagli corretti quando la fetch ha successo', async () => {
    const mockDetails = {
      id: 42,
      title: 'Pulp Fiction',
      overview: 'The lives of two mob hitmen...',
      media_type: 'movie'
    }

    const mockResponse = {
      ok: true,
      json: () => Promise.resolve(mockDetails)
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse)

    const result = await getDetails({ media_type: 'movie', id: 42 })

    expect(result).toEqual(mockDetails)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/movie/42?api_key='),
      expect.any(Object)
    )
  })

  it('usa "person" come fallback se media_type è undefined', async () => {
    const mockDetails = {
      id: 1,
      name: 'Brad Pitt',
      biography: 'An American actor and producer...'
    }

    const mockResponse = {
      ok: true,
      json: () => Promise.resolve(mockDetails)
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse)

    const result = await getDetails({ media_type: undefined as any, id: 1 })

    expect(result).toEqual(mockDetails)
    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/person/1?api_key='),
      expect.any(Object)
    )
  })

  it('lancia un errore se la fetch fallisce', async () => {
    const mockResponse = {
      ok: false,
      status: 404,
      json: jest.fn()
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse)

    await expect(getDetails({ media_type: 'movie', id: 999 }))
      .rejects.toThrow('Errore nella richiesta a TMDB')
  })

  it('gestisce errori di rete', async () => {
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network Error'))

    await expect(getDetails({ media_type: 'tv', id: 1234 }))
      .rejects.toThrow('Network Error')
  })
})
