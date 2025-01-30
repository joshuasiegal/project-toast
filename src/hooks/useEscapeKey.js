import React from 'react';

function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        callback()
      }
    }

    addEventListener('keydown', handleKeydown)

    return () => {
      removeEventListener('keydown', handleKeydown)
    }
  }, [])
}

export default useEscapeKey