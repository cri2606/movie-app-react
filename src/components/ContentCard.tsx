type ContentCardProps = {
    content: {
      id: number,
      name?: string,
      title?: string,
      media_type: string,
    }
  }
  
  export const ContentCard = ({ content }: ContentCardProps) => {
    switch (content.media_type) {
      case "tv":
        return (
          <div style={{ backgroundColor: 'red' }}>
            <h1>{content.name}</h1>
            <p>{content.id}</p>
          </div>
        )
      
      case "movie":
        return (
          <div style={{ backgroundColor: 'blue' }}>
            <h1>{content.title}</h1>
            <p>{content.id}</p>
          </div>
        )
      
      case "person":
        return (
          <div style={{ backgroundColor: 'purple' }}>
            <h1>{content.name}</h1>
            <p>{content.id}</p>
          </div>
        )
    }
  }