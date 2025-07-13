document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const addRowBtn = document.getElementById('add-row');
    const addColBtn = document.getElementById('add-col');
    const resetBtn = document.getElementById('reset');
    
    let rows = 3;
    let cols = 3;
    
    function createGrid() {
        grid.innerHTML = '';
        grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        
        for (let i = 0; i < rows * cols; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = `${Math.floor(i / cols) + 1}-${(i % cols) + 1}`;
            
            cell.addEventListener('click', () => {
                cell.classList.toggle('active');
            });
            
            grid.appendChild(cell);
        }
    }
    
    addRowBtn.addEventListener('click', () => {
        rows++;
        createGrid();
    });
    
    addColBtn.addEventListener('click', () => {
        cols++;
        createGrid();
    });
    
    resetBtn.addEventListener('click', () => {
        rows = 3;
        cols = 3;
        createGrid();
    });
    
    createGrid();
});
