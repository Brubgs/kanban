const cards = document.querySelectorAll('.task-card')

cards.forEach(card => {
    card.addEventListener('dragstart', (e) => {
        card.classList.add('dragging')

        e.dataTransfer.setData('text/plain', card.id)

        setTimeout(() => {
            card.classList.add('dragging');
        }, 0);
    })

    card.addEventListener('dragend', () => {
        card.classList.remove('dragging')
    })
})

const taskLists = document.querySelectorAll('.task-list')

taskLists.forEach(list => {
    list.addEventListener('dragover', (e) => {
        e.preventDefault();
    })

    list.addEventListener('drop', (e) => {
        e.preventDefault()

        const draggingCard = document.querySelector('.dragging')

        if(draggingCard) {
            list.appendChild(draggingCard)
        }
    })
})