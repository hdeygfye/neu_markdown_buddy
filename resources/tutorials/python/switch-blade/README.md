# Switch-Blade Toolkit

A comprehensive collection of Python utility modules for rapid development.

## 🚀 Quick Start

```bash
# Automated setup and testing
./setup_all.sh    # Install all dependencies
./test_all.sh     # Run comprehensive tests
```

## 📦 Available Modules

| Module | Purpose | Status |
|--------|---------|--------|
| cerberus-utils | Data validation | ✅ |
| easygui-utils | GUI dialogs | ✅ |
| fastapi-utils | REST APIs | ✅ |
| ffmpeg-utils | Media processing | ✅ |
| flask-utils | Web applications | ✅ |
| matplotlib-utils | Data visualization | ✅ |
| numpy-utils | Numerical computing | ✅ |
| pandas-utils | Data analysis | ✅ |
| python-magick-utils | Image processing | ✅ |
| pywebview-utils | Desktop web apps | ✅ |
| redis-utils | In-memory database | ✅ |
| sqlite-utils | SQL database | ✅ |

## 🧪 Testing

```bash
# Individual module testing
cd <module-name>/
python <demo-file>.py

# Complete validation
python final_validation.py
```

## 📋 Requirements

- Python 3.8+
- Virtual environment (created by setup script)

### Optional System Dependencies

- FFmpeg (for ffmpeg-utils): `brew install ffmpeg`
- ImageMagick (for python-magick-utils): `brew install imagemagick`
- Redis (for redis-utils): `brew install redis`

## 🔧 Script Reference

### Setup Scripts

| Script | Purpose | Usage |
|--------|---------|-------|
| setup_all.sh | Complete environment setup | `./setup_all.sh` |
| requirements.txt | Python dependencies | `pip install -r requirements.txt` |

### Testing Scripts

| Script | Purpose | Usage |
|--------|---------|-------|
| test_all.sh | Run all tests | `./test_all.sh` |
| test_all_utils.py | Comprehensive module testing | `python test_all_utils.py` |
| final_validation.py | Import and core functionality test | `python final_validation.py` |
| ultimate_verification.py | Complete project verification | `python ultimate_verification.py` |

### Individual Module Scripts

Each utility directory contains:

- `<module>_demo.py` - Demonstration of features
- `test_<module>*.py` - Unit tests
- `<module>_utils.py` - Main utility classes

## 🛠️ Execution Guide

### First Time Setup

```bash
# 1. Clone/download the toolkit
cd switch-blade

# 2. Run automated setup (creates .venv, installs dependencies)
chmod +x setup_all.sh
./setup_all.sh

# 3. Validate installation
./test_all.sh
```

### Daily Usage

```bash
# Activate environment
source .venv/bin/activate

# Use any utility (from module directory)
cd numpy-utils
python -c "
from numpy_utils import NumpyUtils
import numpy as np
utils = NumpyUtils()
print('NumPy utils ready!')
"

# Or run demos
cd numpy-utils && python numpy_utils_demo.py
cd ../matplotlib-utils && python matplotlib_utils_demo.py
cd ../cerberus-utils && python demo_cerberus_utils.py
```

### Troubleshooting

```bash
# If setup fails, try manual installation:
python3 -m venv .venv --clear
source .venv/bin/activate  
pip install --upgrade pip
pip install -r requirements.txt

# If imports fail:
source .venv/bin/activate  # Ensure venv is active
python final_validation.py  # Check which modules fail

# If tests timeout:
python ultimate_verification.py  # Runs faster core tests only
```

## 📚 Usage Examples

### Data Validation

```python
# Example: Data validation
from cerberus_validator_utils import CerberusValidatorUtils
validator = CerberusValidatorUtils()
```

### Data Visualization

```python
# Example: Data visualization  
from matplotlib_utils import PlotUtils
plotter = PlotUtils()
fig, ax = plotter.create_line_plot(x_data, y_data)
```

### Database Operations

```python
# Example: Database operations
from sqlite_utils import SQLiteManager
db = SQLiteManager("database.db")
```

## 📋 Script Workflow

### Complete Setup Process

```bash
# Step 1: Initial Setup
./setup_all.sh
# ├── Creates Python virtual environment (.venv)
# ├── Upgrades pip to latest version  
# ├── Installs all requirements.txt dependencies
# ├── Installs additional specialized dependencies
# └── Shows setup completion status

# Step 2: Comprehensive Testing  
./test_all.sh
# ├── Activates virtual environment
# ├── Runs test_all_utils.py (tests all modules)
# ├── Runs final_validation.py (validates core functionality)  
# └── Shows summary of all test results

# Step 3: Ultimate Verification
python ultimate_verification.py
# ├── Tests project structure completeness
# ├── Validates critical module imports
# ├── Tests demo functionality
# ├── Checks documentation completeness
# └── Provides final battle-ready status
```

### What Each Script Does

#### setup_all.sh

- Creates isolated Python virtual environment
- Installs 20+ required Python packages
- Handles macOS/Linux differences automatically
- Provides clear success/failure feedback

#### test_all.sh

- Runs comprehensive test suite on all 12 modules
- Tests imports, demos, and pytest suites
- Handles GUI/server timeouts gracefully
- Shows detailed pass/fail status for each module

#### test_all_utils.py

- Programmatic testing of all utility modules
- Tests module imports and basic functionality
- Includes headless testing for GUI modules
- Generates detailed test reports

#### final_validation.py

- Quick validation of core modules
- Tests critical imports (numpy, pandas, matplotlib, sqlite, cerberus)
- Runs essential demos to verify functionality
- Suitable for CI/CD integration

#### ultimate_verification.py

- Complete project health check
- Validates project structure and files
- Tests documentation completeness
- Final "battle-ready" certification

## 🛠️ System Requirements

- Python 3.8+
- macOS, Linux, or Windows

### System Dependencies

- FFmpeg: `brew install ffmpeg` (for ffmpeg-utils)
- ImageMagick: `brew install imagemagick` (for python-magick-utils)
- Redis: `brew install redis` (for redis-utils)

## ✅ Status

All 12 utility modules are fully functional and tested.

- 5 modules are completely standalone
- 7 modules require optional system dependencies for full functionality
- Comprehensive test suite with 100% import success rate
- All core functionality validated and working

## 🤝 Contributing

Each module is self-contained. Contributions welcome for additional utilities, improvements, and documentation.

## 🔗 Repository

- **GitHub**: [codecaine-zz/switch-blade](https://github.com/codecaine-zz/switch-blade)
- **Language**: Python (99.2%), Shell (0.8%)
- **License**: Available in repository
- **Documentation**: See `CODE_EXAMPLES.md` for comprehensive usage examples

---

**Switch-Blade Toolkit - Your Swiss Army knife for Python development!** 🗡️
